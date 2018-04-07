package uakari.model;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by jakob on 07.04.18.
 */
public interface TextStringRepository extends MongoRepository<TextString, String> {
}
