const Detalles = () => {
    return ( 
        <div className="detalles">
            <h2>Kai'Sa Airlines (Aerolineas de las Islas del Vacío S.A.)</h2>
            <p>Aerolinea propiedad de Air Chiquin Group (100%)</p>
            <div>
                <h3>Flota actual de aviones:</h3>
                <h4>AeroChiquin</h4>
                <p>Uso exclusivo interislas</p>
                <table>
                    <tr>
                        <th>Modelo</th>
                        <th>Capacidad</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td>AC-10-10</td>
                        <td>16 pasajeros (16 Economy)</td>
                        <td>4 (-4)</td>
                    </tr>
                    <tr>
                        <td>AC-10-20</td>
                        <td>24 pasajeros (24 Economy)</td>
                        <td>5</td>

                    </tr>
                    <tr>
                        <td>AC-110-10</td>
                        <td>18 pasajeros (18 Economy)</td>
                        <td>5 (+5)</td>
                    </tr>
                    <tr>
                        <td>AC-110-20</td>
                        <td>24 pasajeros (24 Economy)</td>
                        <td>1 (+4)</td>
                    </tr>
                    <tr>
                        <td>AC-120-10</td>
                        <td>52 pasajeros (52 Economy)</td>
                        <td>5</td>
                    </tr>
                </table>
                <h4>CHJ (Chiquitin Jet)</h4>
                <p>Para vuelos domesticos e internacionales</p>
                <table>
                    <tr>
                        <th>Modelo</th>
                        <th>Capacidad</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td>CHJ 520-800</td>
                        <td>52 pasajeros (52 Economy)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>CHJ 520-900</td>
                        <td>80 pasajeros (80 Economy)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>CHJ 560-700ER</td>
                        <td>102 pasajeros (102 Economy)</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>CHJ 560-900</td>
                        <td>180 pasajeros (12 Business, 168 Economy)</td>
                        <td>5</td>
                    </tr>
                </table>
                <h4>Chiquitin.S.A.</h4>
                <p>Para vuelos domesticos e internacionales</p>
                <table>
                    <tr>
                        <th>Modelo</th>
                        <th>Capacidad</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td>C400-100</td>
                        <td>114 pasajeros (114 Economy)</td>
                        <td>1 (-1)</td>
                    </tr>
                    <tr>
                        <td>C400-200</td>
                        <td>180 pasajeros (180 Economy)</td>
                        <td>1 (-1)</td>
                    </tr>
                    <tr>
                        <td>C400-300</td>
                        <td>144 pasajeros (144 Economy)</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>C400-300M</td>
                        <td>Combi (144 Economy or 72 Economy & Cargo)</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>C600-300</td>
                        <td>237 pasajeros (24 Business, 213 Economy)</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>C600-800</td>
                        <td>241 pasajeros (20 Business, 231 Economy)</td>
                        <td>2</td>
                    </tr>
                </table>
                <h4>Boeing</h4>
                <p>Para vuelos internacionales hacia Japón y Corea</p>
                <table>
                <tr>
                        <th>Modelo</th>
                        <th>Capacidad</th>
                        <th>Cantidad</th>
                    </tr>
                    <tr>
                        <td>Boeing 737-700(WL)</td>
                        <td>122 pasajeros(8 Business, 114 Economy)</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Boeing 757-200(WL)</td>
                        <td>168 pasajeros(16 Business, 152 Economy)</td>
                        <td>2</td>
                    </tr>
                </table>
            </div>
            <div>
                <h3>Notas adicionales</h3>
                <p> El AC-10-10 será retirado a finales de enero de 2024 </p>
                <p> El C400-100 será retirado a finales de enero de 2024 </p>
                <p> El C400-200 será retriado a finales de febrero de 2024 </p>
            </div>
            <div>
                <h3>Enlaces interesantes</h3>
                <p> <a href="https://www.airchiquingroup.com/kaisa-airlines/about">Kai'Sa Airlines</a> </p>
                <p> <a href="https://www.airchiquin.com/es/">Air Chiquin</a> </p>
            </div>
        </div>
    );
}
 
export default Detalles;