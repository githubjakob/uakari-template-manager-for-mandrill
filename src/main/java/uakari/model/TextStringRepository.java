package uakari.model;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by jakob on 07.04.18.
 */
public interface TextStringRepository extends MongoRepository<TextString, String> {

    List<TextString> findByUserId(String userId);

}
