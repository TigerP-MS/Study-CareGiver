#include <stdio.h>

int main(void)
{
	int x = 1;
	{
		int y = 2;
		x = 3;
		printf("%d %d\n", x, y);
	}
	printf("%d\n", x);
	// 3 2
	// 3
}