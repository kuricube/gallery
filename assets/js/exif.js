class EXIF {
    constructor(image_json, id) {
        this.image_json = image_json;
        this.id = id
    }
    exif_encode() {
        let exifdata, content,
        Request = new XMLHttpRequest();
        Request.open('GET', this.image_json);
        Request.send(null);
        Request.onload = function() {
                output()
            }

        function output() {
            exifdata = JSON.parse(Request.responseText);
            content = "<p style=\"font-size: 0.8em\">ISO " + exifdata.iso + " | <i>f</i> " + exifdata.f_num + " | " + exifdata.exposuretime + "s | " + exifdata.focal_length + "mm | " + exifdata.model + " | " + exifdata.LensModel + "<br> " + exifdata.time + "</p>"
            let contents = new Array();
            for (var i = 0; i<=this.id; i++) {
                contents[i] = content
            }
            out = contents[id]
        }
}
}