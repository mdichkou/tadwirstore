import React from 'react';
import MediaCard from './MediaCard';

export default function ResultSearch() {

    return (
        <div>
            <div className="mt-3 row p-3" >
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
            </div>
            <div className="mt-3 row p-3" >
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
            </div>
            <div className="mt-3 row p-3" >
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
                <div className="col">
                    <MediaCard />
                </div>
            </div>
        </div>

    );
}