const notes = require("./notes.js")
const yargs = require("yargs")

const log = console.log

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'note contents',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        log(argv.title + " \n -" + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        log("trying to remove: ")
        log(argv.title)
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(argv) {
        log('_LIST ')
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(argv) {
        log('_READ ')
    }
})

yargs.parse()