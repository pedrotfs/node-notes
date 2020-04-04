const notes = require("./notes.js")
const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const fs = require("fs")

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
    handler: function(argv) {
        log('_REMOVE ' + argv[0])
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(argv) {
        log('_LIST ' + argv[0])
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(argv) {
        log('_READ ' + argv[0])
    }
})

yargs.parse()