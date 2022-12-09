#!/bin/bash

# Return ports that local Mongo instance is using
LIST_MONGO_PORTS="$(pgrep -f mongod)"

# If no ports active, startup Mongo and MongoDB compass GUI
if [ -z $LIST_MONGO_PORTS ]; then
    echo "Launching Mongo..."
    sleep 2
    mongod
else
    # Kill all active ports and start
    echo "Terminating existing Mongo instance..."
    sleep 2
    echo $LIST_MONGO_PORTS | while read -r pid ; do
        sudo kill $pid
    done
    mongod
fi
