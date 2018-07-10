export const exportToExcel = {
	 methods: {
            exportExcel() {
                const mimeType = 'data:application/vnd.ms-excel';
                const html = this.renderTable().replace(/ /g, '%20');

                const d = new Date();

                var dummy = document.createElement('a');
                dummy.href = mimeType + ', ' + html;
                dummy.download = this.iData['header'].toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() +
                        1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() +
                    '.xls';
                dummy.click();
            },

            renderTable() {
                var table = '<table><thead>';

                table += `<tr><th colspan="${ this.excelData.length }">${ this.iData['header'] }</th></tr>`;

                // create an empty row
                table += '<tr>';
                for (var i = 0; i < this.excelData.length; i++) {
                    table += '<th></th>';
                }
                table += '</tr>';

                table += '<tr>';

                for (var i = 0; i < this.excelData.length; i++) {
                    const column = this.excelData[i];
                    table += '<th>';
                    table += column.name;
                    table += '</th>';
                }
                table += '</tr>';

                table += '</thead><tbody>';

                table += '<tr>';
                for (var j = 0; j < this.excelData.length; j++) {
                    const column = this.excelData[j];
                    table += '<td>';
                    table += column.value;
                    table += '</td>';
                }
                table += '</tr>';
                table += '</tbody></table>';

                return table;
            },
        },
}