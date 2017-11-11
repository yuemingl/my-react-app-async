# React example using async fetch to get data

The content of public/data.json is displayed using async fetch

````javascript
    (async function(dataList) {
      try {
        let response = await fetch('/data.json');
        let json = await response.json();
        dataList.setState({data:json})
      }
      catch(e) {
        console.log('Error!', e);
      }
    })(this);

````
![ScreenShot](https://github.com/yuemingl/my-react-app-async/blob/master/images/Screen%20Shot%202017-11-10%20at%204.56.09%20PM.png)
