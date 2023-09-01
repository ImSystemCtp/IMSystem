import React from "react";

export const TableHeaderUsers: React.FC = () => {
    return (
        <thead className="rounded-lg h-1/4 text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-2 sm:px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-2 sm:px-6 py-3 hidden sm:table-cell">
                    Type
                </th>
                <th scope="col" className="px-2 sm:px-6 py-3 hidden sm:table-cell">
                    Contact
                </th>
                <th scope="col" className="px-2 sm:px-6 py-3 hidden sm:table-cell">
                    Mail
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3">
                    EDIT
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3">
                    DELETE
                </th>
            </tr>
        </thead>
    );
};
