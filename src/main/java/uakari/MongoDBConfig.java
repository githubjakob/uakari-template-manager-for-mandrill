package uakari;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackageClasses = AccountRepository.class)
public class MongoDBConfig {

    @Bean
    CommandLineRunner commandLineRunner(final AccountRepository accountRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                accountRepository.save(new Account("asdflaösdf"));
            }
        };
    }
}
