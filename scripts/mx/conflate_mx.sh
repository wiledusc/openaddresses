#! bin/bash
# sudo pip install csvkit
mkdir csv
mkdir inegi
cd inegi

# mapbox auth production XXXXXX
# aws s3 cp s3://gis-data/inegi/inegi_data.zip

unzip inegi_data.zip;

for f in inegi_data/*.zip; do
    unzip $f -d inegi_data/;
done

rm inegi_data/*.zip;

cd inegi_data
counter=0
for f in */*T.shp; do
    counter=$((counter+1))
    out_name=$(basename $f .shp)
    out_file='../csv/'$out_name'.csv';
    ogr2ogr -t_srs EPSG:4326 -f CSV $out_file $f -lco GEOMETRY=AS_XY;
    iconv -f iso-8859-1 -t utf8 $out_file > $out_file'.temp'
    echo $counter' done'
done;
cd ..

csvstack csv/*.temp > mx.csv
