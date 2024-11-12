<?php
echo "<link type='text/css' href='all.css' rel='stylesheet'>";
$key = strtr($key," ",chr(32));

include 'sform.php';

require("functions.php");

echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=windows-1256\">\n";
$bo = '/home/alrawdah/data/' . $sub1 . '.txt';
$fcontents = join ('', file ($bo));
$ss = explode("[s1]", $fcontents);

$sss = nl2br($ss[$p]);
$p1 = strtr($sss,chr(220),"");
$bu = explode("<br />", $p1);
$buffer = $bu[1];

$ac = count($ss);

$i = $p;
$prev = $i - 1;
$next = $i + 1;

    $pr = "<a href=" . "r.php?show=home&menu=a1_menu&sub0=allbooks&sub1=" . $sub1 . "&p=" . $next . ">"
    	  . "<img border=" . "0" . " src=" . "images/ab.gif " . "align=" . "middle"
		  . " alt=" . strtr("الصفحة التالية",chr(32)," ") . ">";
		  //. " التالي" . "</a>" ;
    $ne = "<a href=" . "r.php?show=home&menu=a1_menu&sub0=allbooks&sub1=" . $sub1 . "&p=" . $prev . ">"
		. "<img border=" . "0" . " src=" . "images/af.gif " . "align=" . "middle"
     	. " alt=" . strtr("الصفحة السابقة",chr(32)," ") . ">";
    //  . "السابق " . "</a>" ;

    $in = "<a href=" . "r.php?show=home&menu=a1_menu&sub0=contents&sub1=" . $sub1 . ">"  . "الفهرس " . "</a>" ;

echo "<br>";
prevnext();
    $post = $ss[$i];
	$post = str_replace($buffer,"",$post); 
	$post = formatpost($post);
    $post = str_replace($key,"<font color='#ff0000'>" . $key . "</font>",$post); 

	$pat = array("'(\[)shr]([^>].*?)(\[)/shr]'si");
	$rep = array("<font size=3 color=blue>\\2</font>");


if ( $i < $ac)
{
echo "<div align='center'>
  <table border='0' cellpadding='0' dir='rtl' id='table3' style='border-collapse: collapse' height='57' width='750'>
    <tr>
      <td align='right' valign='bottom' background='images/c1.gif'>&nbsp;</td>
      <td background='images/logo2.gif' valign='top' dir='rtl' height='19'>&nbsp;</td>
      <td width='12' align='left' valign='bottom' height='19' background='images/c2.gif'>&nbsp;</td>
    </tr>
    <tr>
      <td background='images/l.gif' height='19'>&nbsp;</td>
      <td height='19'>
    <center>
	<table class='table1'>
		<tr>
			<td class='td1'>
  		    <b><font color='#ff0000' size='5'>$buffer</font></b>$post</td>
		</tr>
	</table>
	</center>
      </td>
      <td width='12' background='images/r.gif' height='19'>&nbsp;</td>
    </tr>
    <tr>
      <td width='12' align='right' valign='top' height='19'>
      <img border='0' src='images/c4.gif' width='12' height='14'></td>
      <td background='images/bot.gif' height='19'>&nbsp;</td>
      <td width='12' align='left' valign='top' height='19'>
      <img border='0' src='images/c3.gif' width='12' height='14'></td>
    </tr>
  </table>
</div>

	";
}
else
{
echo "
	<center>
	<table bgcolor='#EAFFFF' width='98%' border='0' align='center'>
		<tr>
			<td>
				<font color=darkblue size=4><br>'انتهى الكتاب'<br></font>
			</td>
		</tr>
	</table>
	</center>" ;
}

prevnext();
echo "<br>";


function prevnext()
{
global $prev,$next,$i,$ac,$ne,$pr;
if ($i <= 1 )
   {
    $i = 1;
    $prev = $i;
    $ne = "";
    pages();
   }
elseif ($i >= $ac )
   {
    $i = $ac;
    $next = $i;
    $pr = "";
    pages();
   }
else
    {
    pages();
    }
    return 0;
}

function pages()
{
global $pr,$ne,$in;
echo "<center>"
     . "<table" . " width=" . "98%" . " bgcolor=" . "#ffffff" . ">" . "<tr>" . "<td width= " . "15%" . ">"
     . "<p align=" . "right" . ">" . $ne . "</td>"  . "<td width=" . "70%" . ">"
     . "<p align=" . "center" . ">" . $in . "</td>" . "<td width=" . "15%" . ">"
     . "<p align=" . "left" . ">" . $pr . "</td></tr></table>"
     . "</center>";

    return 0;
}

?>