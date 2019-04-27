# aplx-hmw-css

## Factory 
> All configurations like username, password, db connection etc will be passed from Client project. So that we utilize this factory function to read it. 
> In client project, import factory function and send the data.
 We will use factory for access data across controllers. 
        
### How to access factory
factory will have 4 methods
- setWebConfig() -> include all required keys which needs from client configuration.
- getWebConfig() ->  We will get the configuration based on the key.
- syncConfig(data, key) -> to store any other values which may be accessed across the classes
- getConfig(key) -> get the data based on key which is stored with syncConfig().
        