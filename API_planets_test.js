const chai = require('chai');
const assert = chai.assert; // Using Assert style

Feature('API planets');

Scenario('Teste API Planets', async (I) => {
    
    let apiplanetsget = await I.sendGetRequest('/planets/1/?format=json');
    let resapiplanetsget = apiplanetsget.data;
    assert(apiplanetsget.status === 200, "Status is not 200.");    
    assert.equal(resapiplanetsget.name,'Tatooine','Name Incorrect');
    assert.equal(resapiplanetsget.rotation_period,'23','Rotation Period Incorrect');
    assert.equal(resapiplanetsget.orbital_period,'304','Orbital Period Incorrect');
    assert.equal(resapiplanetsget.diameter,'10465','Diameter Incorrect');
    assert.equal(resapiplanetsget.climate,'arid','Climate Incorrect');
    assert.equal(resapiplanetsget.gravity,'1 standard','Gravity Incorrect');
    assert.equal(resapiplanetsget.terrain,'desert','Terrain Incorrect');
    assert.equal(resapiplanetsget.surface_water,'1','Surface Water Incorrect');
    assert.equal(resapiplanetsget.population,'200000','Population Incorrect');
       

});
