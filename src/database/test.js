const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name:"Raniel Sobrinho",
        avatar: "https://avatars2.githubusercontent.com/u/41129154?s=460&u=0841806be2ac3eb36e62f8827ac704aedc7c0860&v=4",
        whatsapp: "123456789",
        bio: "Um jovem amante de ensino",
    }

    classValue = {
        subject: "1",
        cost: "35,00",
        //proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados
        {
            weekday: "1",
            time_from: "720",
            time_to: "1220"
        },
        {
            weekday: "3",
            time_from: "520",
            time_to: "1020",
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados
});