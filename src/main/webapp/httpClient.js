class HttpClient {

    addNewMandrillApiKey() {

        console.log("asdfasfd")


        fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })

    }

}

export default new HttpClient()