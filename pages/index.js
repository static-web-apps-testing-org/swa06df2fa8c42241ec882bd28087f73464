import React, { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
		<div>
			
		</div>
         <div style={{ fontSize: "120px", margin: "20px", textAlign: "center" }}>Welcome to Next.js!</div>
		 <div style={{ padding: "10px 20px", fontSize: "50px", margin: "5%", textAlign: "center", color: "white"}}>
			<a href="/feature/ssr">SSR Demo</a><br></br><br></br>
			<a href="/feature/isr">ISR Demo with revalidate time of 10s.</a>
		 </div>
      </>	    
   )
}

export default HomePage

// SIG // Begin signature block
// SIG // MIIriQYJKoZIhvcNAQcCoIIrejCCK3YCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Mrs5ycu2OvQVELNzMLiCdfiH7Z96r+O+L/UrxJlAkbeg
// SIG // ghF9MIIIjTCCB3WgAwIBAgITNgAAAeCBaGSnq8u//QAC
// SIG // AAAB4DANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjQwMTIwMDEz
// SIG // NDAzWhcNMjUwMTE5MDEzNDAzWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlCO1vYAudsum
// SIG // +1IrSlxi6b8equofqY31NJ65D3hubDRXMCqk++UgHO3V
// SIG // rlWgevU7Y5Hf3x8Xyp73VXLI2nSjscX+Cw3u/sZ4nn8E
// SIG // 6gfdVzT/vTxcepAmr8VB55dBxYWnWd7dWPHVRlMmgI2Q
// SIG // 0U0VCz1v/aZxgiEMr00ucvOzMf+dFjJO3Ng9dhlNedQY
// SIG // X1qIzDzaW3WGUVWiCZsw814wQQA18Agh3hixHD9nTMA8
// SIG // FiyTWJlEM8gO9BCvQKF/CxDFxLlQ4aa0MmtQiMy/ibOR
// SIG // HZv94s5NjQMFU6DnGLwmPjxn+WsZ4AllRdtq+EILVFtF
// SIG // zlBW1qbuvWYwpzuIKBjyKQIDAQABo4IFmTCCBZUwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEOMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUp93M5xkvs0cwfyDe
// SIG // w4UnPUpioUswDgYDVR0PAQH/BAQDAgeAMFQGA1UdEQRN
// SIG // MEukSTBHMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFu
// SIG // ZCBPcGVyYXRpb25zIExpbWl0ZWQxFjAUBgNVBAUTDTIz
// SIG // NjE2Nys1MDE5NzEwggHmBgNVHR8EggHdMIIB2TCCAdWg
// SIG // ggHRoIIBzYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraWluZnJhL0NSTC9BTUUlMjBDUyUyMENBJTIwMDEo
// SIG // MikuY3JshjFodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMi5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMy5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsNC5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshoG9bGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEoMiksQ049QlkyUEtJQ1NDQTAxLENO
// SIG // PUNEUCxDTj1QdWJsaWMlMjBLZXklMjBTZXJ2aWNlcyxD
// SIG // Tj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFN
// SIG // RSxEQz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlz
// SIG // dD9iYXNlP29iamVjdENsYXNzPWNSTERpc3RyaWJ1dGlv
// SIG // blBvaW50MB8GA1UdIwQYMBaAFJZRhOBrb3v+2Aarw/KF
// SIG // 5imuavnUMB8GA1UdJQQYMBYGCisGAQQBgjdbAQEGCCsG
// SIG // AQUFBwMDMA0GCSqGSIb3DQEBCwUAA4IBAQCiadnRYACw
// SIG // zKwj9B+IF+9ae7mrgOh3tl9t9efBsSXxg6ed8jCLXPAm
// SIG // gzyM+TSMyoE4kIjT0LrHI41p9YcgwY2UKKo/Kpg0NuXx
// SIG // 8/cIdfpra6669hIxEuGHwMH3VlOrMxoT0rNdGjtRd+aB
// SIG // aOAuHtjo+euoBEY2RlIVPXh3PmqTHAz5bVPmcUyT6xsm
// SIG // WO0fMGbIT6qf13n49ml6QWT0EgQLPeXzsMB5oAHlWClx
// SIG // v98RK+no0UWOAU/zn6GQqqZfKZCTFqUGwyjDDwznopGJ
// SIG // 2Qxplm6PP1/sRdgIfQdm0MDbMYMwPcVwJ9JhGnq2Owfi
// SIG // KsswbypzC7E91lCROSQn8CL7MIII6DCCBtCgAwIBAgIT
// SIG // HwAAAFHqj/accwyoOwAAAAAAUTANBgkqhkiG9w0BAQsF
// SIG // ADA8MRMwEQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZIm
// SIG // iZPyLGQBGRYDQU1FMRAwDgYDVQQDEwdhbWVyb290MB4X
// SIG // DTIxMDUyMTE4NDQxNFoXDTI2MDUyMTE4NTQxNFowQTET
// SIG // MBEGCgmSJomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixk
// SIG // ARkWA0FNRTEVMBMGA1UEAxMMQU1FIENTIENBIDAxMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyZpS
// SIG // CX0Bno1W1yqXMhT6BUlJZWpa4p3xFeiTHO4vm2Q6C/az
// SIG // R5xwxnyYHrkSGDtS2P9X+KDE64V20mmEQkubxnPNeOVn
// SIG // E2RvdPGxgwlq+BhS3ONdVsQPj79q7XgHM9HhzB9+qk0P
// SIG // C9KN1zm9p/seyiRS6JF1dbOqRf1pUl7FAVxmgiCFgV8h
// SIG // HIb/rDPXig7FDi3S0yEx2CUDVpIq8jEhG8anUFE1WYxM
// SIG // +ni0S5KHwwKPKV4qyGDoDO+9AmDoma3Chyu5WDlW5cdt
// SIG // qXTWsGPE3umtnX6AmlldUFLms4OVR4guKf+n5LIBCC6b
// SIG // TiocfXPomqYjYTKx7AGMfaVLaaXmhQIDAQABo4IE3DCC
// SIG // BNgwEgYJKwYBBAGCNxUBBAUCAwIAAjAjBgkrBgEEAYI3
// SIG // FQIEFgQUEmgkQiFHy9RrvjHPIKTACyN/P0cwHQYDVR0O
// SIG // BBYEFJZRhOBrb3v+2Aarw/KF5imuavnUMIIBBAYDVR0l
// SIG // BIH8MIH5BgcrBgEFAgMFBggrBgEFBQcDAQYIKwYBBQUH
// SIG // AwIGCisGAQQBgjcUAgEGCSsGAQQBgjcVBgYKKwYBBAGC
// SIG // NwoDDAYJKwYBBAGCNxUGBggrBgEFBQcDCQYIKwYBBQUI
// SIG // AgIGCisGAQQBgjdAAQEGCysGAQQBgjcKAwQBBgorBgEE
// SIG // AYI3CgMEBgkrBgEEAYI3FQUGCisGAQQBgjcUAgIGCisG
// SIG // AQQBgjcUAgMGCCsGAQUFBwMDBgorBgEEAYI3WwEBBgor
// SIG // BgEEAYI3WwIBBgorBgEEAYI3WwMBBgorBgEEAYI3WwUB
// SIG // BgorBgEEAYI3WwQBBgorBgEEAYI3WwQCMBkGCSsGAQQB
// SIG // gjcUAgQMHgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAS
// SIG // BgNVHRMBAf8ECDAGAQH/AgEAMB8GA1UdIwQYMBaAFCle
// SIG // UV5krjS566ycDaeMdQHRCQsoMIIBaAYDVR0fBIIBXzCC
// SIG // AVswggFXoIIBU6CCAU+GMWh0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2lpbmZyYS9jcmwvYW1lcm9vdC5jcmyG
// SIG // I2h0dHA6Ly9jcmwyLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
// SIG // Y3JshiNodHRwOi8vY3JsMy5hbWUuZ2JsL2NybC9hbWVy
// SIG // b290LmNybIYjaHR0cDovL2NybDEuYW1lLmdibC9jcmwv
// SIG // YW1lcm9vdC5jcmyGgapsZGFwOi8vL0NOPWFtZXJvb3Qs
// SIG // Q049QU1FUm9vdCxDTj1DRFAsQ049UHVibGljJTIwS2V5
// SIG // JTIwU2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmln
// SIG // dXJhdGlvbixEQz1BTUUsREM9R0JMP2NlcnRpZmljYXRl
// SIG // UmV2b2NhdGlvbkxpc3Q/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // UkxEaXN0cmlidXRpb25Qb2ludDCCAasGCCsGAQUFBwEB
// SIG // BIIBnTCCAZkwRwYIKwYBBQUHMAKGO2h0dHA6Ly9jcmwu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lpbmZyYS9jZXJ0cy9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMi5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMy5h
// SIG // bWUuZ2JsL2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcG
// SIG // CCsGAQUFBzAChitodHRwOi8vY3JsMS5hbWUuZ2JsL2Fp
// SIG // YS9BTUVSb290X2FtZXJvb3QuY3J0MIGiBggrBgEFBQcw
// SIG // AoaBlWxkYXA6Ly8vQ049YW1lcm9vdCxDTj1BSUEsQ049
// SIG // UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049U2Vydmlj
// SIG // ZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
// SIG // P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1j
// SIG // ZXJ0aWZpY2F0aW9uQXV0aG9yaXR5MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQBQECO3Tw/o317Rrd7yadqcswPx1LvIYymk
// SIG // aTN6KcmuRt6HKa0Xe73Ux2/AQ30TfgA9GBJngweRykKB
// SIG // usRzyOU17iIubJvy3gA21dwtqtB0DsoEv1U/ptVu2v++
// SIG // doTCJ/i+GbssVXkgaX8H+6EOGEmT4evp4GbwR4HwWlc+
// SIG // Dvf8HH8PdUA2Z04CvcwIfckSipbNm84jxJ8XjmTFTWsc
// SIG // ldL9edj2NsY6iGnyJFIyur2PS7VRYyV3p1VAJp91gj1j
// SIG // RQtWEyCB8P5g9nE3z8u0ANaU/hjwEQCrdGyravWgnf2J
// SIG // tG+bT26YAokbc8m+32zUtXRO+NK3tAjhOu2FdsG3qNrF
// SIG // 4sc7y37R/C+7Pcb/cFfhttqsirepZii4xStcjMODYuXz
// SIG // Gm3IJs0b0owHG6oKd7ZOGvHpmmh9K8/DLriD/sq8bURD
// SIG // 10qi/wuW8zM7IpLg1vcR9dIK2mc0pj44pc6UX0XbttP/
// SIG // VEJgu3lT2eI9VjWtaKjx38xE9woSMyekPRtzTwgfuysF
// SIG // 9DkJisr+yA4po/FPxpbBw9c/hBf32DH/GFxteS2pmjgK
// SIG // IbMP8sDukmEq3lVvuWNJsybrZwQvQpvaM49fv+JKpLK5
// SIG // YWYEfwksYRR9wU8Hh/ID9hRCEkbUoQ2W7mMpsp2Nbp/k
// SIG // cn4ivfolUy3Q9Yf0scsQ6WTLYpm+AoCUJTGCGWQwghlg
// SIG // AgEBMFgwQTETMBEGCgmSJomT8ixkARkWA0dCTDETMBEG
// SIG // CgmSJomT8ixkARkWA0FNRTEVMBMGA1UEAxMMQU1FIENT
// SIG // IENBIDAxAhM2AAAB4IFoZKery7/9AAIAAAHgMA0GCWCG
// SIG // SAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMC8GCSqGSIb3DQEJBDEiBCDnmYSXZ0HbyYwcbQA2
// SIG // sHperE+1ibeBlAWY9mB2oU8LIjBCBgorBgEEAYI3AgEM
// SIG // MTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAYaHR0
// SIG // cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3DQEB
// SIG // AQUABIIBAESLCKWOZI9+fPu5jyfBe6/Z9o+WbR2zRx6R
// SIG // PrMXmoN2rvLo+dLWkMrpPprSaxTCi0c2R+1iDlB0eD+P
// SIG // nWGzPU2YBJlbHdx4t31FApvWYaHo9ng423JaIiOVugyc
// SIG // l0z8B2i4Nl5MFzQc5b/ex1YiwogeVUCZcl8j3KmLirdq
// SIG // WXx2tpIQkWyqyBrK3wdhOx/WT4rcSfkmsCdlnGYKaFSY
// SIG // M8xMrG5s3TVFgIXtJDvd9/8hPQ/t4d4Fd5EaNc0QGL8V
// SIG // I2DSK/AOtda7cEK3bHuaRexItf7r9PJzRmOgKQC2a/hA
// SIG // WOrU2UD1A82ZuxrP0VW3itfREdmwbgb5P4ccGTVAyTah
// SIG // ghcsMIIXKAYKKwYBBAGCNwMDATGCFxgwghcUBgkqhkiG
// SIG // 9w0BBwKgghcFMIIXAQIBAzEPMA0GCWCGSAFlAwQCAQUA
// SIG // MIIBWQYLKoZIhvcNAQkQAQSgggFIBIIBRDCCAUACAQEG
// SIG // CisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQgUJXU
// SIG // C/QJpjQ/mn879R+a3gf0z3qlXgxP3anF60IpNTYCBmX8
// SIG // ZiLWUxgTMjAyNDAzMjUyMTU2MjkuMDQ5WjAEgAIB9KCB
// SIG // 2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UE
// SIG // CxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9ucyBM
// SIG // aW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjoy
// SIG // QUQ0LTRCOTItRkEwMTElMCMGA1UEAxMcTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgU2VydmljZaCCEXswggcnMIIFD6AD
// SIG // AgECAhMzAAAB3p5InpafKEQ9AAEAAAHeMA0GCSqGSIb3
// SIG // DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // MB4XDTIzMTAxMjE5MDcxMloXDTI1MDExMDE5MDcxMlow
// SIG // gdIxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1p
// SIG // Y3Jvc29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRl
// SIG // ZDEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046MkFENC00
// SIG // QjkyLUZBMDExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1l
// SIG // LVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEBAQUA
// SIG // A4ICDwAwggIKAoICAQC0gfQchfVCA4QOsRazp4sP8bA5
// SIG // fLEovazgjl0kjuFTEI5zRgKOVR8dIoozBDB/S2NklCAZ
// SIG // FUEtDJepEfk2oJFD22hKcI4UNZqa4UYCU/45Up4nONlQ
// SIG // wKNHp+CSOsZ16AKFqCskmPP0TiCnaaYYCOziW+Fx5NT9
// SIG // 7F9qTWd9iw2NZLXIStf4Vsj5W5WlwB0btBN8p78K0vP2
// SIG // 3KKwDTug47srMkvc1Jq/sNx9wBL0oLNkXri49qZAXH1t
// SIG // VDwhbnS3eyD2dkQuKHUHBD52Ndo8qWD50usmQLNKS6at
// SIG // CkRVMgdcesejlO97LnYhzjdephNJeiy0/TphqNEveAcY
// SIG // Nzf92hOn1G51aHplXOxZBS7pvCpGXG0O3Dh0gFhicXQr
// SIG // 6OTrVLUXUqn/ORZJQlyCJIOLJu5zPU5LVFXztJKepMe5
// SIG // srIA9EK8cev+aGqp8Dk1izcyvgQotRu51A9abXrl70Kf
// SIG // HxNSqU45xv9TiXnocCjTT4xrffFdAZqIGU3t0sQZDnjk
// SIG // MiwPvuR8oPy+vKXvg62aGT1yWhlP4gYhZi/rpfzot3fN
// SIG // 8ywB5R0Jh/1RjQX0cD/osb6ocpPxHm8Ll1SWPq08n20X
// SIG // 7ofZ9AGjIYTccYOrRismUuBABIg8axfZgGRMvHvK3+nZ
// SIG // SiF+Xd2kC6PXw3WtWUzsPlwHAL49vzdwy1RmZR5x5QID
// SIG // AQABo4IBSTCCAUUwHQYDVR0OBBYEFGswJm8bHmmqYHcc
// SIG // yvDrPp2j0BLIMB8GA1UdIwQYMBaAFJ+nFV0AXmJdg/Tl
// SIG // 0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3JsL01p
// SIG // Y3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEw
// SIG // KDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYBBQUH
// SIG // MAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lv
// SIG // cHMvY2VydHMvTWljcm9zb2Z0JTIwVGltZS1TdGFtcCUy
// SIG // MFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4ICAQDilMB7Fw2n
// SIG // Bjr1CILORw4D7NC2dash0ugusHypS2g9+rWX21rdcfhj
// SIG // Ims0rsvhrMYlR85ITFvhaivIK7i0Fjf7Dgl/nxlIE/S0
// SIG // 9tXESKXGY+P2RSL8LZAXLAs9VxFLF2DkiVD4rWOxPG25
// SIG // XZpoWGdvafl0KSHLBv6vmI5KgVvZsNK7tTH8TE0LPTEw
// SIG // 4g9vIAFRqzwNzcpIkgob3aku1V/vy3BM/VG87aP8NvFg
// SIG // PBzgh6gU2w0R5oj+zCI/kkJiPVSGsmLCBkY73pZjWtDr
// SIG // 21PQiUs/zXzBIH9jRzGVGFvCqlhIyIz3xyCsVpTTGIbl
// SIG // n1kUh2QisiADQNGiS+LKB0Lc82djJzX42GPOdcB2IxoM
// SIG // FI/4ZS0YEDuUt9Gce/BqgSn8paduWjlif6j4Qvg1zNoF
// SIG // 2oyF25fo6RnFQDcLRRbowiUXWW3h9UfkONRY4AYOJtzk
// SIG // xQxqLeQ0rlZEII5Lu6TlT7ZXROOkJQ4P9loT6U0MVx+u
// SIG // LD9Rn5AMFLbeq62TPzwsERuoIq2Jp00Sy7InAYaGC4fh
// SIG // BBY1b4lwBk5OqZ7vI8f+Fj1rtI7M+8hc4PNvxTKgpPcC
// SIG // ty78iwMgxzfhcWxwMbYMGne6C0DzNFhhEXQdbpjwiImL
// SIG // En/4+/RKh3aDcEGETlZvmV9dEV95+m0ZgJ7JHjYYtMJ1
// SIG // WnlaICzHRg/p6jCCB3EwggVZoAMCAQICEzMAAAAVxedr
// SIG // ngKbSZkAAAAAABUwDQYJKoZIhvcNAQELBQAwgYgxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29m
// SIG // dCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDEw
// SIG // MB4XDTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIyNVow
// SIG // fDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggIiMA0G
// SIG // CSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM57Ry
// SIG // IQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/bErg
// SIG // 4r25PhdgM/9cT8dm95VTcVrifkpa/rg2Z4VGIwy1jRPP
// SIG // dzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzBRMhxXFEx
// SIG // N6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41JmTa
// SIG // mDu6GnszrYBbfowQHJ1S/rboYiXcag/PXfT+jlPP1uyF
// SIG // Vk3v3byNpOORj7I5LFGc6XBpDco2LXCOMcg1KL3jtIck
// SIG // w+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF50Zu
// SIG // yjLVwIYwXE8s4mKyzbnijYjklqwBSru+cakXW2dg3viS
// SIG // kR4dPf0gz3N9QZpGdc3EXzTdEonW/aUgfX782Z5F37Zy
// SIG // L9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0lBw0
// SIG // gg/wEPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlMjgK8
// SIG // QmguEOqEUUbi0b1qGFphAXPKZ6Je1yh2AuIzGHLXpyDw
// SIG // wvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJYfM2
// SIG // BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzFER1y
// SIG // 7435UsSFF5PAPBXbGjfHCBUYP3irRbb1Hode2o+eFnJp
// SIG // xq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYBBAGC
// SIG // NxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS/mTE
// SIG // mr6CkTxGNSnPEP8vBO4wHQYDVR0OBBYEFJ+nFV0AXmJd
// SIG // g/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYMKwYBBAGC
// SIG // N0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBvc2l0
// SIG // b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEFBQcDCDAZBgkr
// SIG // BgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMC
// SIG // AYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV
// SIG // 9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEug
// SIG // SaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUF
// SIG // BzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNy
// SIG // dDANBgkqhkiG9w0BAQsFAAOCAgEAnVV9/Cqt4SwfZwEx
// SIG // JFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518JxNj/a
// SIG // ZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6th54
// SIG // 2DYunKmCVgADsAW+iehp4LoJ7nvfam++Kctu2D9IdQHZ
// SIG // GN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2pFaq95W2
// SIG // KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBewVIVC
// SIG // s/wMnosZiefwC2qBwoEZQhlSdYo2wh3DYXMuLGt7bj8s
// SIG // CXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7T7uG+jIa2Zb0
// SIG // j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzHVG2d
// SIG // Y3RILLFORy3BFARxv2T5JL5zbcqOCb2zAVdJVGTZc9d/
// SIG // HltEAY5aGZFrDZ+kKNxnGSgkujhLmm77IVRrakURR6nx
// SIG // t67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+CrvsQWY9
// SIG // af3LwUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKiexcd
// SIG // FYmNcP7ntdAoGokLjzbaukz5m/8K6TT4JDVnK+ANuOaM
// SIG // mdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/OHBE
// SIG // 0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQdVTNY
// SIG // s6FwZvKhggLXMIICQAIBATCCAQChgdikgdUwgdIxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jvc29m
// SIG // dCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEmMCQG
// SIG // A1UECxMdVGhhbGVzIFRTUyBFU046MkFENC00QjkyLUZB
// SIG // MDExJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WiIwoBATAHBgUrDgMCGgMVAGigUorMuMvO
// SIG // qZfF8ttgiWRMRNrzoIGDMIGApH4wfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTAwDQYJKoZIhvcNAQEFBQACBQDp
// SIG // q4DoMCIYDzIwMjQwMzI1MTI0OTQ0WhgPMjAyNDAzMjYx
// SIG // MjQ5NDRaMHcwPQYKKwYBBAGEWQoEATEvMC0wCgIFAOmr
// SIG // gOgCAQAwCgIBAAICCkYCAf8wBwIBAAICE6AwCgIFAOms
// SIG // 0mgCAQAwNgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYBBAGE
// SIG // WQoDAqAKMAgCAQACAwehIKEKMAgCAQACAwGGoDANBgkq
// SIG // hkiG9w0BAQUFAAOBgQCOnY5PemmZCtX5xARUAv8D7nZy
// SIG // xRQKMjsKJeoVsHysSXHB0nHZtMoR3yrJCW0BkPnyKshj
// SIG // SmjKUoXBUw9voACrC9ioGYgJFMHARKPgLTr0UFTRJYLc
// SIG // hpPxUGEUTzaNsMP1XuQiRsIKpUKjLYLpCr67tOu7p+pT
// SIG // IfwVUGdR7uEJNTGCBA0wggQJAgEBMIGTMHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB3p5InpafKEQ9
// SIG // AAEAAAHeMA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkqhkiG
// SIG // 9w0BCQMxDQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcNAQkE
// SIG // MSIEIHFNEpeFF3OfaTaZ2n7YXPvVu51daFnBdNDrbU5U
// SIG // +/3zMIH6BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCBvQQg
// SIG // jj4jnw3BXhAQSQJ/5gtzIK0+cP1Ns/NS2A+OB3N+HXsw
// SIG // gZgwgYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYD
// SIG // VQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAx
// SIG // MAITMwAAAd6eSJ6WnyhEPQABAAAB3jAiBCA+Znv90xdu
// SIG // TLIoMcwMb3BqCvc7mWftqpqPhnWdzzOGNTANBgkqhkiG
// SIG // 9w0BAQsFAASCAgAtPX8QLIUOUmpaUeRQnNKlkqqsicnF
// SIG // TLNpsweRGNP+UHmFnOfVWe22ZAGLZ+aN3Tcfa2AvbqZr
// SIG // PqkXtneNYDYf3ITaiwfdUBoP1vyIPoJGYwHpSj9RPsNh
// SIG // OWrEdXwD7ywJoaoasqEO5wZL0aO+NmGICDUUFm9X3B61
// SIG // dljlbjUb500buBgg2l2qUaJr2oScAwDIrUEvio3AqF1y
// SIG // Q6Q6PlhMnvrSkig2Sis5RVXYm3XI0rrvTYdOPZPc+I18
// SIG // W0VTH36+XfuDyy577BOjKtg2fpXhT5rHXVPmEKF+Mdgx
// SIG // qzSr0yJQZjPk0VbaRKiFfY4KW/HwOg+ewFqkmkRQWbNQ
// SIG // /jJS3tuaPEk9aC0Glca88EorbpuRjiKNd50gAYmmZpoM
// SIG // P1VFPBMR32WiTlTyvey0BhQJ0R9xEWTUqoGUNVs5/OXt
// SIG // m8BB8KDZhHF6Zu9rgNYlQ71XEmvjfn1YlG5Yy+90t3Mq
// SIG // 3v4s8aHWYyA4GQNP01l78pXcFNJtK5fSjAuZDkG6cLlk
// SIG // 8A7AJsyGUn5eZl6JDbWIpjwinU8rlWRRP/x4K2Qq/whC
// SIG // 0VQvxwWYD1G2usOqWSB8+oo6gROySURsLI52iSwbwufH
// SIG // qG+UH9AuCAxl9AnpOGQAu2P1US6S5z3YWJCgxlEziitj
// SIG // KmXGx9OMj922agFAiXM/cmsHp3h9H5Nu5LHbzA==
// SIG // End signature block
