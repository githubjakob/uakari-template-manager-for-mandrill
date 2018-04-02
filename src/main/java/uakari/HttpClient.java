package uakari;

import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

public class HttpClient {

    final private static String MANDRILL_API = "https://mandrillapp.com/api/1.0/";

    final private static String ADD_TEMPLATE = "/templates/add.json";

    final private static String API_KEY = "LogDNKnyFDsLO9ShU12dlw";

    final private static RestTemplate restTemplate = new RestTemplate();

    public static boolean createTemplate() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestJson = "{\n" +
                "    \"key\": " + API_KEY + ",\n" +
                "    \"name\": \"Example Template\",\n" +
                "    \"from_email\": \"from_email@example.com\",\n" +
                "    \"from_name\": \"Example Name\",\n" +
                "    \"subject\": \"example subject\",\n" +
                "    \"code\": \"<div>example code</div>\",\n" +
                "    \"text\": \"Example text content\",\n" +
                "    \"publish\": false,\n" +
                "    \"labels\": [\n" +
                "        \"example-label\"\n" +
                "    ]\n" +
                "}";

        HttpEntity<String> entity = new HttpEntity<String>(requestJson, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(MANDRILL_API + ADD_TEMPLATE, entity, String.class);

        System.out.println("test");

        return response.getStatusCode().is2xxSuccessful();
    }
}
