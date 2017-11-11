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
