#!/bin/bash
echo "downloading $1"
casperjs ../download.js "$1" "`basename $1 | sed -e 's/&.*//'`"
