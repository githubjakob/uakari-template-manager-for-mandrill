package uakari.model;

import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Locale;

@Document(collection = "TextStrings")
public class TextString {

    public TextString(String templateName, String name, String text, Locale locale) {
        this.templateName = templateName;
        this.name = name;
        this.text = text;
        this.locale = locale;
    }

    @Getter
    String templateName;

    /** the key */
    @Getter
    String name;

    /** the value */
    @Getter
    String text;

    @Getter
    Locale locale;

}
