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
        subject: 1,
        cost: "35,00",
        //proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 520,
            time_to: 1020
        }
    ]
    //abaixo a função que insere os dados
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //abaixo a função que consulta dados
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer juntos os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario do time_from precisa ser menor ou igual ao o horário solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 3
        AND class_schedule.time_from <= 600
        AND class_schedule.time_to > 600
    `)
    console.log(selectClassesSchedules)
});