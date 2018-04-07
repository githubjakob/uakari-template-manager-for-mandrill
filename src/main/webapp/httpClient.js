import md5 from 'md5'

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

    static createNewHtmlTemplate(userId, formData) {
        console.log("name " + formData.name)
        console.log("html " + formData.html)
        return (
            fetch('http://localhost:8080/rest/htmlTemplate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    name: formData.name,
                    html: formData.html
                })
            })
        )
    }

    static getHtmlTemplates(userId) {
        return (
            fetch('http://localhost:8080/rest/htmlTemplate?userId=' + userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
        )
    }
}

export default HttpClient