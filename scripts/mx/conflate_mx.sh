#! bin/bash
# sudo pip install csvkit
# mkdir csv
# mkdir inegi
# cd inegi

# mapbox auth production XXXXXX
# aws s3 cp s3://gis-data/inegi/inegi_data.zip

unzip inegi_data.zip;

for f in inegi_data/*.zip; do
    unzip $f -d inegi_data/;
done;

rm inegi_data/*.zip;

counter=0

for f in inegi_data/*T.shp; do
    counter=$((counter+1))
    output='csv/'$f'.csv';
    ogr2ogr -t_srs EPSG:4326 -f CSV $output $f/*T.shp -lco GEOMETRY=AS_XY;
    iconv -f 'iso-8859-1' -t utf8 $output > $output
    echo $counter' done'
done;

csvstack csv/* > mx.csv
