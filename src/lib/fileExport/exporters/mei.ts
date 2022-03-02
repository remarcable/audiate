import { getMarkersWithMeasures } from "lib/getMarkersWithMeasures";
import type { FileExporter } from "..";

const replaceSpacesWithUnderscores = (string: string) =>
  string.replaceAll(" ", "_");
export const meiExporter: FileExporter = {
  fileType: "xml",
  mimeType: "text/xml",
  name: "MEI",
  stateToFile: async (state) => {
    const js2xmlparser = await import("js2xmlparser");

    const { markers, duration } = state.player;
    const extendedMarkers = getMarkersWithMeasures(markers);

    const { name } = state.app.file;
    const nameWithoutFileExtension = name.split(".").slice(0, -1).join(".");

    const resultObject = {
      "@": {
        xmlns: "http://www.music-encoding.org/ns/mei",
        "xml:id": replaceSpacesWithUnderscores(nameWithoutFileExtension),
      },
      meiHead: {
        fileDesc: {
          titleStmt: {
            title: nameWithoutFileExtension,
          },
          pubStmt: {},
        },
      },
      music: {
        performance: {
          recording: {
            "@": {
              "xml:id": "some_recording_id",
              decls: "#some_other_recording_id",
            },
            avFile: {
              "@": {
                // XXX: This includes the file extension
                target: name,
              },
            },
            clip: extendedMarkers.map((marker, i, arr) => ({
              "@": {
                begin: marker.time,
                end: arr[i + 1]?.time ?? duration,
                betype: "time",
                startid: replaceSpacesWithUnderscores(
                  `#${nameWithoutFileExtension}_measure${marker.measure}`
                ),
                type: "measure",
              },
            })),
          },
        },
        body: {
          mdiv: {
            "@": {
              "xml:id": replaceSpacesWithUnderscores(name),
              label: name,
            },
            score: {
              section: {
                measure: extendedMarkers.map((marker) => ({
                  "@": {
                    "xml:id": replaceSpacesWithUnderscores(
                      `${nameWithoutFileExtension}_measure${marker.measure}`
                    ),
                    sameas: `../some_file_path.xml#some_id_measure${marker.measure}`,
                  },
                })),
              },
            },
          },
        },
      },
    };

    const resultString = js2xmlparser.parse("mei", resultObject, {
      declaration: { encoding: "UTF-8" },
      format: { doubleQuotes: true },
    });

    // I didn't find a way to add the next line to the XML using the package,
    // so I add it here manually:
    const meiXmlModelLine =
      '<?xml-model href="https://music-encoding.org/schema/4.0.1/mei-CMN.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>';

    const resultStringLines = resultString.split("\n");
    const resultStringWithModelLine = [
      resultStringLines[0],
      meiXmlModelLine,
      resultStringLines.slice(1),
    ]
      .flat()
      .join("\n");

    return resultStringWithModelLine;
  },
};
