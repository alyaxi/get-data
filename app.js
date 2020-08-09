console.log("fetch api");

// Get Api

async function getApi(){
    const api = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(api , "Json api");
    const json = await api.json();
    console.log(json, "Json view");

}
getApi()

// Post Api

async function postApi(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            userid: 1,
            name: "syed ali uz zaman",
            course: "javascript"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    console.log(api , "Json api");
    const json = await api.json();
    console.log(json, "Json view");
}
postApi()
