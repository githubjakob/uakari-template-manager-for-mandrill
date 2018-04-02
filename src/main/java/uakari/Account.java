package uakari;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Accounts")
public class Account {

    public Account(String apiKey) {
        this.apiKey = apiKey;
    }

    @Id
    @Getter
    String id;

    @Getter
    String apiKey;

}
