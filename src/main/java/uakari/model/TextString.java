package uakari.model;

import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Locale;

@Document(collection = "TextStrings")
public class TextString {

    public TextString(String name, String string, String userId) {
        this.name = name;
        this.string = string;
        this.userId = userId;
    }

    @Getter
    String userId;

    /** the key */
    @Getter
    String name;

    /** the value */
    @Getter
    String string;
}
