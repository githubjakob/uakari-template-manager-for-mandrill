package uakari.model;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "HtmlTemplates")
public class HtmlTemplate {

    public HtmlTemplate(String userId, String html, String name) {
        this.userId = userId;
        this.html = html;
        this.name = name;
    }

    @Id
    @Getter
    String id;

    @Getter
    String userId;

    @Getter
    String name;

    @Getter
    String html;

}
