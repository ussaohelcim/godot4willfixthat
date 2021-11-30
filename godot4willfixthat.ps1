param($link)
function PuxarJsonELimpar { param ($urljson)
	$sujo = Invoke-WebRequest -Uri $urljson 
	$limpo = $sujo.Content | ConvertFrom-Json
	return $limpo
}

if($null -eq $link)
{
	$bread = Read-Host "Bread link" 
	$bread += ".json"
}
else {
	$bread = "$link.json"
}

$quotes = ""

$json = PuxarJsonELimpar -urljson $bread

foreach($post in $json.posts)
{
	[String]$mensagem = $post.com
	$num = $post.no

	if($mensagem.Contains("godot") -or $mensagem.Contains("Godot"))
	{
		$quotes += ">>$num "
	}
}
$quotes += "`nGodot 4.0 will fix that"
Write-Host $quotes
Set-Clipboard $quotes