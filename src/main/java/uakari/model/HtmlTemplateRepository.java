package uakari.model;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HtmlTemplateRepository extends MongoRepository<HtmlTemplate, String> {

    List<HtmlTemplate> findByUserId(String userId);

}