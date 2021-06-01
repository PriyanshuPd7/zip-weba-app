let JSZip = require('jszip');


document.getElementById('my-input').addEventListener('change', (evt) => {
    let files = evt.target.files
    let zip = new JSZip()
    for(let file of files){ 
        let filename = file.name
        zip.file(filename, file)
    }
    zip.generateAsync({type:'blob'}).then((blobdata)=>{
    
        let zipblob = new Blob([blobdata])
        var elem = window.document.createElement("a")
        elem.href = window.URL.createObjectURL(zipblob)
        elem.download = 'compressed.zip'
        elem.click()
    })

})
