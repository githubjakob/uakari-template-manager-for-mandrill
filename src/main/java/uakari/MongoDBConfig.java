package uakari;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import uakari.model.HtmlTemplate;
import uakari.model.HtmlTemplateRepository;

/**
 *
 * TODO
 * runs during startup and creates entries in the db
 * not sure if the configuration and enablemongorepositories annotation neccessary
 *
 * name might be confusing too
 *
 */

@Configuration
@EnableMongoRepositories(basePackageClasses = HtmlTemplateRepository.class)
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(final HtmlTemplateRepository accountRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                accountRepository.save(new HtmlTemplate("userid", "hmlt"));
            }
        };
    }
}
