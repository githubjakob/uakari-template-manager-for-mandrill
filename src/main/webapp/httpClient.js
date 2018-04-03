class HttpClient {

    static pingMandrill(apiKey) {
        return (
            fetch('https://mandrillapp.com/api/1.0/users/ping.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    key: apiKey
                })
            })
        )
    }

    static createNewHtmlTemplate(userId, html) {
        return (
            fetch('http://localhost:8080/rest/htmlTemplate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    html: html
                })
            })
        )
    }

}

export default HttpClient