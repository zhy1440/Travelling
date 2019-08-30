echo off
REM curl -i -k -s -u admin:Password123! --url https://100.85.109.220:443/api/rest/eth_port?select=id,current_speed,current_speed_l10n,supported_speeds_l10n//
REM set login=admin:X10Tech!
REM set login=admin:Password123!
REM set ip=%1
REM set desc=%2

set saveDir=./flight/

REM mkdir "%saveDir%"

set file=%saveDir%/2019-09-26.json
echo "== save %file%"
REM curl --insecure "https://68.142.68.27:443/Flight/InternalSelect?s=true&o1=MNL&d1=USU&dd1=2019-05-07&mon=true&dj1=0&dj2=1" -o %file%
curl --insecure "https://book.cebupacificair.com/Flight/InternalSelect?s=true&o1=MNL&d1=USU&dd1=2019-09-26&mon=true&dj1=0&dj2=1" -o %file%
curl --insecure "https://book.cebupacificair.com/Flight/Select" -o %file%

rem 
