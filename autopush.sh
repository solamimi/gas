inotifywait -e create,delete,modify,move -mr ./*|while read;do while read -t 0.3;do :;done;clasp push;done
