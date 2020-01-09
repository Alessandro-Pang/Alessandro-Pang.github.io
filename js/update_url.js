    let this_host = window.location.host;
    let imgs = document.getElementsByTagName('img');
    for (let i = 0;i < imgs.length ;i++){
        hostUrl = this_host + '/posts/';
        thisUrl = imgs.getArrtibute('url');
        imgs.setArrtibute('url',hostUrl + thisUrl)
    }