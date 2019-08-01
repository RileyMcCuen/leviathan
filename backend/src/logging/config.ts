import {Category, CategoryConfiguration, CategoryServiceFactory, LogLevel} from 'typescript-logging';

// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));

// Create categories, they will autoregister themselves, one category without parent (root) and a child category.
export const catService = new Category('service');
export const DefaultCat = new Category('Default', catService);
export const AppCat = new Category('App', catService);
export const RLCat = new Category('Rate Limiting', catService);
export const RiotAPICat = new Category('Riot', catService);
