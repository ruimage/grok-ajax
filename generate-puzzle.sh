#!/bin/sh

PUZZLE_NAME=$1
ANSWER_DIR=./answers/$PUZZLE_NAME
PUZZLE_DIR=./puzzles/$PUZZLE_NAME
NUMBER=$(echo $PUZZLE_NAME | tr -dc '0-9')

mkdir $ANSWER_DIR
touch $ANSWER_DIR/server.js

mkdir $PUZZLE_DIR
touch $PUZZLE_DIR/server.js
touch $PUZZLE_DIR/README${NUMBER}.md
