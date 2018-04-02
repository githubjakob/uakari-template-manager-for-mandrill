class HttpClient {

    addNewMandrillApiKey(key) {

        console.log("adding key " + key)


        fetch('http://localhost:8080/rest/account', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey: key
            })
        })

    }

}

export default new HttpClient()