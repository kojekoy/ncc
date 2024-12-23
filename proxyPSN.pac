/******************************************************************
*
*     Browser Autoconfig File for Testing LAN1 access to DW4020
*     Originally created by WRumancik
*    Add support for Jupiter hosts 3/8/2012 - dct
*    Bypassed 10.36.221, 10.36.225 and 10.41.0.0 to unblock Jupiter test sites 3/9/2012 - rjt
*    Bypass 10.36.195.202 to unblock tcsweb 3/20/2012 - rjt
*    Fixed hnops -> hnengr swap and added SIVProxy 11/18/2012 - rjayant
*    Add support for SIV GW devices - aoneill
*****************************************************************/
//

function FindProxyForURL(url, host)
{


		
// PSN access
    PSNproxy = "PROXY 172.27.5.130:8081";
    if (dnsDomainIs (host, ".gw.jupiter.psnops.net") || dnsDomainIs (host, ".terminal.jupiter.psnops.net"))
        return PSNproxy;

// PSN2 access
    PSNproxy = "PROXY 172.27.15.130:8081";
    if (dnsDomainIs (host, ".gw.jupiter.psn2ops.net") || dnsDomainIs (host, ".terminal.jupiter.psn2ops.net"))
        return PSNproxy;

// H47Prox
	SATRIAProx= "PROXY 172.16.18.131:8081";
    if (dnsDomainIs (host, ".terminal.jupiter.n3ops.net") || dnsDomainIs (host, ".gw.jupiter.n3ops.net") || dnsDomainIs (host, ".sck.snc.jupiter.n3ops.net")|| dnsDomainIs (host, ".sam.snc.jupiter.n3ops.net")|| dnsDomainIs (host, ".stm.snc.jupiter.n3ops.net") || dnsDomainIs (host, ".ckg.rfgw.jupiter.n3ops.net")|| dnsDomainIs (host, ".tim.rfgw.jupiter.n3ops.net")|| dnsDomainIs (host, ".bnj.rfgw.jupiter.n3ops.net")|| dnsDomainIs (host, ".kup.rfgw.jupiter.n3ops.net")|| dnsDomainIs (host, ".amb.rfgw.jupiter.n3ops.net"))
		return SATRIAProx;

    // Hughesnet proxy server
    HNproxy = "PROXY 66.82.145.27:4010" ;

    // Jupiter device proxy server
    JUProxy = "PROXY 66.82.3.130:80" ;
	if (dnsDomainIs (host, ".terminal.jupiter.hnops.net") ||
         dnsDomainIs (host, ".gw.jupiter.hnops.net"))
                     return JUProxy;

     // spaceway.net, Hughes domains, or (my)hughesnet.com should go direct
     // Special rule needed because some of these resolve to 10.x addresses
     if (isInNet (host, "10.33.67.78", "255.255.255.255") || isInNet (host,"10.36.221.0","255.255.255.0") || isInNet (host,"10.36.225.0","255.255.255.0") || 
isInNet (host,"10.36.195.202","255.255.255.255") || isInNet (host,"10.41.0.0","255.255.0.0") || dnsDomainIs (host, ". jupiter.hnengr.net") ||
         dnsDomainIs (host, ".spaceway.net") ||
         dnsDomainIs (host, ".hns.com") ||
         dnsDomainIs (host, ".hughes.com") ||
         dnsDomainIs (host, ".hughesnet.com") ||
         dnsDomainIs (host, ".hughes.net") ||
         dnsDomainIs (host, ".myhughesnet.com") ||
	 isInNet (host,"10.52.12.150","255.255.255.255"))
         return "DIRECT";

   
     // Everthing else is internal or external
     return "DIRECT";
}
