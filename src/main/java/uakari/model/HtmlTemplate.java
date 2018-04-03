package uakari.model;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "HtmlTemplates")
public class HtmlTemplate {

    public HtmlTemplate(String userId, String html) {
        this.userId = userId;
        this.html = html;
    }

    @Id
    @Getter
    String id;

    @Getter
    String userId;

    @Getter
    String html;

}
