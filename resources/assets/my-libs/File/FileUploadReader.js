export class FileUploadReader {
  static uploadHandler(event) {
    const fileList = event.target.files;
    if (!fileList || fileList.length < 1) {
      return Promise.resolve(false);
    }
    let arrPromises = [];
    Object.keys(fileList).forEach((key, index) => {
      arrPromises.push(this.read(fileList[key]));
    });
    return Promise.all(arrPromises);
  }

  static read(file) {
    if (!file) {
      return Promise.resolve(false);
    }
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onloadend = resolve;
      fileReader.onerror = reject;
      fileReader.readAsDataURL(file);
    });
  }
}
