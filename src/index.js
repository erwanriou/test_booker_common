module.exports = Import = (folder, file, extention) => {
  return folder === "models"
    ? require(`./${folder}/${extention}/${file}`)
    : require(`./${folder}/${file}`)
}
