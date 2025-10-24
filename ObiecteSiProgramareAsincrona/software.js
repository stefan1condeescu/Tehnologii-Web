class Software{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is running`)
    }
}

class BrowserPlugin{
    constructor(name){
        this.name = name;
    }
    install(){
        console.log(`${this.name} plugin is installed`)
    }
}

class Browser extends Software{
    constructor(name){
        super(name);
        this.plugins = [];
    }
    addPlugin(plugin){
        this.plugins.push(plugin);
    }
}

const chrome = new Browser('Google Chrome');
chrome.run();
chrome.addPlugin(new BrowserPlugin('AdBlocker'));
chrome.addPlugin(new BrowserPlugin('Grammarly'));
console.log(chrome.plugins);
