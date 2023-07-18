function fileExtract(path){

    let indexOfDot = path.lastIndexOf(".");
    if(indexOfDot > -1){
        let fileName = path.substring(path.lastIndexOf("\\") + 1, indexOfDot)
        let extension = path.substring(indexOfDot + 1, path.length);
        console.log(`File name: ${fileName}`);
        console.log(`File extension: ${extension}`);
    }
}

fileExtract('C:\\Internal\\training-internal\\Template.pptx');
