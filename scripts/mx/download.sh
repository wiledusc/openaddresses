#!/bin/bash
OUTFILE="`basename $1 | sed -e 's/&.*//'`"
if [ -f $OUTFILE ]; then
    echo "skipping $OUTFILE"
else
    echo "downloading $OUTFILE"
    casperjs ../download.js "$1" "$OUTFILE"
fi
