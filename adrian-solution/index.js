const fs = require("fs").promises;

// dirInspectPro Main
function directoryAnalysis(fileStats) {
  let byteSum = 0;
  let max = 0;
  let maxKey = 0;
  let totalFiles = fileStats.length;
  for (let key in fileStats) {
    if (fileStats[key].stats.size == 0) {
      totalFiles--;
    } else {
      byteSum += fileStats[key].stats.size;
      if (fileStats[key].stats.size > max) {
        max = fileStats[key].stats.size;
        maxKey = key;
      }
    }
  }
  console.log("Directory Analysis:");
  console.log("Total items: ", fileStats.length);
  console.log("Total files: ", totalFiles);
  console.log("Total size (bytes): ", byteSum);
  console.log(
    "Largest file: ",
    fileStats[maxKey].name,
    " Size: ",
    fileStats[maxKey].stats.size,
    " bytes"
  );
}

function fileList(fileStats) {
  console.log("File list:");
  for (let key in fileStats) {
    console.log(
      fileStats[key].name,
      " Size: ",
      fileStats[key].stats.size,
      " bytes"
    );
  }
}

async function processDirectoryContents(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);

    const fileStatsPromises = files.map(async (file) => {
      const filePath = `${directoryPath}/${file}`;
      const stats = await fs.stat(filePath);
      return { name: file, stats };
    });

    const fileStats = await Promise.all(fileStatsPromises);
    directoryAnalysis(fileStats);
    console.log();
    fileList(fileStats);
  } catch (err) {
    console.error("Error processing directory contents:", err.message);
  }
}

processDirectoryContents("../LearningNodeJS");

console.log();
