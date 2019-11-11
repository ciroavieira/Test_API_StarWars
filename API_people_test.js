const chai = require('chai');
const assert = chai.assert; // Using Assert style

Feature('API people');

Scenario('Teste API People', async (I) => {
    
    let apipeopleget = await I.sendGetRequest('/people/1/?format=json');
    let resapipeopleget = apipeopleget.data;
    assert(apipeopleget.status === 200, "Status is not 200.");
    assert.equal(resapipeopleget.name,'Luke Skywalker','Name Incorrect');
    assert.equal(resapipeopleget.height,'172','Height Incorrect');
    assert.equal(resapipeopleget.mass,'77','Mass Incorrect');
    assert.equal(resapipeopleget.hair_color,'blond','Hair Color Incorrect');
    assert.equal(resapipeopleget.skin_color,'fair','Skin Color Incorrect');
    assert.equal(resapipeopleget.eye_color,'blue','Eye Color Incorrect');
    assert.equal(resapipeopleget.birth_year,'19BBY','Birth Year Incorrect');
    assert.equal(resapipeopleget.gender,'male','Gender Incorrect');
       

});
