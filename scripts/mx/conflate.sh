#!/bin/bash

# aws s3 cp s3://gis-data/inegi/inegi_data.zip
unzip inegi_data.zip && cd inegi_data
parallel "unzip {}" ::: $(ls | grep 'zip')
rm *.* # remove the zip files and rando files
echo "reprojecting and converting to csv.."
parallel "ogr2ogr -t_srs EPSG:4326 -f CSV /vsistdout/ {}/{}T.shp -lco GEOMETRY=AS_XY >> ../out.csv" ::: $(ls * | grep 'T\.shp' | sed s/T.shp//g)
